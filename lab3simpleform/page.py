class Page(object):

    #Constutor creates the page
    def __init__(self):
        self.title = ""
        self.css = "css/styles.css"
        self.body = ""
        self.head = '''
<!DOCTYPE HTML>
<html>
    <head>
        <title>{self.title}</title>
        <link href="{self.css}" rel="stylesheet" type="text/css"/>
    </head>
    <body>
                '''
        #closes html mark up
        self.close = '''
    </body>
</html>
'''
    # print function to create the html page with all the attributes
    def print_out(self):
        html = self.head + self.body + self.close
        html = html.format(**locals())
        return html