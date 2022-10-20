from flask import Flask, render_template, request
from google.cloud import aiplatform
from google.oauth2 import service_account


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
    response = endpoint.predict([request_body])
    prediction = response[0][0]
    prediction.pop("lower_bound")
    return {"response": prediction}


if __name__ == "__main__":
    initialize_ai_platform()
    app.run(host="0.0.0.0", port=8080, debug=True)
