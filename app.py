from flask import *

app = Flask(__name__)


# @app.before_request
# def beforeRequestHandler():  
#	to do: authentication  
#    return 


@app.route("/login", methods=['GET', 'POST'])
def login():
	if request.method == "GET":
		return render_template("login.html")
	if request.method == "POST":
		print (request.form) 
		# this is the form:
		# ImmutableMultiDict([('username', 'Lucian'), ('password', '123456'), ('type', 'Guest')])
		return redirect("/landlord")
 

@app.route('/landlord', methods=['GET', 'POST'])
def landlord():
	return render_template("landlord.html")
	# if request.method == "GET":
	# 	return render_template("landlord.html")
	# if request.method == "POST":
	# 	return render_template("login.html")


@app.route('/user', methods=['GET', 'POST'])
def user():
	return render_template("user.html")
	# if request.method == "GET":
	# 	
	# if request.method == "POST":
	# 	return render_template("login.html")
 

@app.route('/specialist', methods=['GET', 'POST'])
def specialist():
	return render_template("specialist.html")
	# if request.method == "GET":
	# 	return render_template("login.html")
	# if request.method == "POST":
	# 	return render_template("login.html")



if __name__ == '__main__':
	app.run()
