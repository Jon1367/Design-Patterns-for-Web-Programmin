class Page(object):
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
        self.close = '''
    </body>
</html>
'''

    def print_out(self):
        html = self.head + self.body + self.close
        html = html.format(**locals())
        return html