#DO NOT MESS WITH THIS CODE
import webapp2
from page import Page


class MainHandler(webapp2.RequestHandler):
    def get(self):
        #MEMORIZE THIS write FUNCTION
        #self.response.write()
        p = Page()
        #Print the form
        #html = p.print_out()
        #self.response.write(html)
        print "page loaded"
        print self.request.GET

        if self.request.GET:
            user = self.request.GET["user"]
            age = self.request.GET["age"]
            movie = self.request.GET["movie"]
            print user + age + movie
            p.body = """
            <p>New Page</p>
            <p>Name: {user} </p>
            <p>Age: {age} </p>
            <p>Movie: {movie} </p>
            """
            p.body = p.body.format(**locals())
        else:
            p.body = """
            <form method="GET" action="">
            <label>Name</label><input type="text" name="user" />
            <label>Age</label><input type="text" name="age" />
            <label>Favorite Movie</label><input type="text" name="movie" />
            <input type="submit" value="Submit" />
            </form>
            """

        self.response.write(p.print_out())


#DO NOT MESS WITH THIS CODE
app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)