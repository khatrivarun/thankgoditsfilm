from flask import Flask, render_template, request
from google.cloud import aiplatform
from google.oauth2 import service_account
from copy import deepcopy


app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")


def initialize_ai_platform():
    global endpoint

    credentials = service_account.Credentials.from_service_account_file(
        './key.json')
    aiplatform.init(credentials=credentials)
    endpoint = aiplatform.Endpoint(
        endpoint_name="projects/1078932510854/locations/asia-south1/endpoints/1760362096534487040"
    )


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def hello():
    request_body = request.get_json()

    nf_request = deepcopy(request_body)
    nf_request['ott'] = 'NF'

    amz_request = deepcopy(request_body)
    amz_request['ott'] = 'AMZ'

    dsny_request = deepcopy(request_body)
    dsny_request['ott'] = 'DSNY'

    nf_response = endpoint.predict([nf_request])
    amz_response = endpoint.predict([amz_request])
    dsny_response = endpoint.predict([dsny_request])

    nf_prediction = nf_response[0][0]
    amz_prediction = amz_response[0][0]
    dsny_prediction = dsny_response[0][0]

    nf_prediction.pop("lower_bound")
    amz_prediction.pop("lower_bound")
    dsny_prediction.pop("lower_bound")
    return {"response": {
        "NF": nf_prediction,
        "DSNY": dsny_prediction,
        "AMZ": amz_prediction
    }}


if __name__ == "__main__":
    initialize_ai_platform()
    app.run(host="0.0.0.0", port=8080, debug=True)
