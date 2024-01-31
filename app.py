
from cs50 import SQL
from flask import flash, Flask, render_template, request, session, redirect
from flask_session import Session

db = SQL("sqlite:///users.db")
app = Flask(__name__)

# Configure Session
app.config["SESSION_PERMANENT"] = "False"
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/find-a-tutor")
def find():
    tutors = db.execute("SELECT * FROM tutors;")
    print(tutors)
    return render_template("find-a-tutor.html", tutors = tutors)

@app.route("/join-us", methods=["GET", "POST"])
def join():
    if request.method == "POST":
        flash("Your information has been submitted")
        return redirect("/")
    else: 
        return render_template("join-us.html")

@app.route("/login", methods=["GET", "POST"])
def logIn():
    if request.method == "GET":
      return render_template("log-in.html")
    elif request.method == "POST":
        username = request.form.get("username")
        pas = request.form.get("password")
        rows = db.execute("SELECT * FROM users WHERE username = ?", username)
        if len(rows) != 1:
            return render_template("log-in.html", error="Invalid username")
        elif rows[0]["password"] != pas:
            return render_template("log-in.html", error="Username and password do not match")
        else:
            session["name"] = username
            flash(session["name"] + " has logged in!")
            return render_template("index.html")
    
@app.route("/logout")    
def logout():
     username = session["name"]
     session.clear()
     flash(username + " has logged out")
     return redirect("/")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "GET":
        return render_template("signup.html")
    elif request.method == "POST":
        username = request.form.get("username")
        email = request.form.get("email")
        emails = db.execute("SELECT * FROM users WHERE email = ?", email)
        rows = db.execute("SELECT * FROM users WHERE username = ?", username)
        if len(rows) > 0:
            return render_template("signup.html", error="Username taken")
        if len(emails) > 0:
            return render_template("signup.html", error="Email taken")
        pas = request.form.get("password")
        confPas = request.form.get("confirm-pass")
        if pas != confPas:
            return render_template("signup.html", error="Passwords do not match")
        else:
            db.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?);",username, pas, email)
            session["name"] = username
            flash(username + " has signed in!")
            return render_template("index.html")
    

@app.route("/about")
def about():
    
    return render_template("about.html")

@app.route("/listing/OmarOzalp")
def listingOmar():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 1;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/AlexReynolds")
def listingAlex():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 2;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/LucaDasari")
def listingLuca():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 3;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/MateoRodriguez")
def listingMateo():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 4;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/LeilaSantos")
def listingLeila():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 5;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/MalikPatel")
def listingMalik():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 6;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listing/SophiaThompson")
def listingSophia():
    tutors = db.execute("SELECT * FROM tutors WHERE id = 7;")
    return render_template("listing.html", tutors=tutors)

@app.route("/listings")
def listings():
    flash("Your reservation has been sent!")
    return redirect("/")