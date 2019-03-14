from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html', name="mandar waghe")

@app.route('/login')
def login():
    return render_template('index.html', name="mandar waghe")

@app.route('/register')
def register():
    return render_template('index.html', name="mandar waghe")

if __name__ == "__main__":
    app.run()
