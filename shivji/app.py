from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/generate', methods=['POST'])
def generate():
    name = request.json.get("name")
    if not name:
        name = "Bhakt"
    message = f"{name} ji, aapko Maha shiv ratri ki hardik shubh kamnaye, Rana ji ki taraf se."
    return jsonify({"message": message})

if __name__ == "__main__":
    app.run(debug=True)
