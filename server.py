import http.server
import socketserver

# Specify the port number to listen on
PORT = 9000

class CSVRequestHandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        # Override the default guess_type() method to force CSV files to be treated as text/csv
        if path.endswith('.csv'):
            return 'text/csv'
        return super().guess_type(path)

    def end_headers(self):
        # Add additional headers to allow the CSV file to be displayed or downloaded
        self.send_header('Content-Disposition', 'inline; filename="data.csv"')
        super().end_headers()

# Start the server
with socketserver.TCPServer(("", PORT), CSVRequestHandler) as httpd:
    print("Server started on port", PORT)
    httpd.serve_forever()
