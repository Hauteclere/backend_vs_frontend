from flask import Flask, jsonify, request, abort
from flask_cors import CORS

app= Flask(__name__)

CORS(app)

@app.route("/data/", methods=["GET"])
def ingredients_list():
    with open("../database.txt") as database:
        data = {
        "name": "Oliver",
        "items": [item.strip() for item in database.readlines()]
    }

    return jsonify(data)

if __name__=='__main__':
    app.run(debug=True)