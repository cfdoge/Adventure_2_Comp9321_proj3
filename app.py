from flask import *

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == "GET":
    	return render_template("house_owner.html")
    if request.method == "POST":
    	return render_template("house_owner.html")


if __name__ == '__main__':
    app.run()
