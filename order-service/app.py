from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/orders")
def get_orders():
    return jsonify(["Order 1", "Order 2", "Order 3"])

if __name__ == "__main__":
    app.run(port=8082)