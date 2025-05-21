document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enquiryForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const eventSelected = document.getElementById('event').value;
        const toJoin = document.querySelector('input[name="To Join"]:checked') ? 'Yes' : 'No';
        const eventActivities = document.querySelector('input[name="Event Activities"]:checked') ? 'Yes' : 'No';
        const registrationFees = document.querySelector('input[name="Registration Fees"]:checked') ? 'Yes' : 'No';
        const rulesGuidelines = document.querySelector('input[name="Rules & Guidelines"]:checked') ? 'Yes' : 'No';
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || eventSelected === '1' || message === '') {
            
            document.getElementById('alertBox').style.display = 'block';
            return;
        }
        
        const newWindow = window.open('', '_blank');
       
        newWindow.document.write(`
            <html>
                <head>
                    <title>Form Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background: linear-gradient(to right, #ff7e5f, #feb47b);
                            color: #333;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .form-container {
                            background: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            width: 100%;
                            max-width: 500px;
                        }
                        h2 {
                            font-size: 24px;
                            text-align: center;
                            color: #ff6f61;
                        }
                        p {
                            font-size: 18px;
                            margin-bottom: 10px;
                        }
                        pre {
                            font-family: Arial, sans-serif;
                            font-size: 18px;
                            white-space: pre-wrap;
                            background: #f7f7f7;
                            padding: 10px;
                            border-radius: 4px;
                        }
                    </style>
                </head>
                <body>
                    <div class="form-container">
                        <h2>Congratulations</h2>
                        <p><strong>Full Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Interested Event:</strong> ${eventSelected}</p>
                        <p><strong>To Join:</strong> ${toJoin}</p>
                        <p><strong>Event Activities:</strong> ${eventActivities}</p>
                        <p><strong>Registration Fees:</strong> ${registrationFees}</p>
                        <p><strong>Rules & Guidelines:</strong> ${rulesGuidelines}</p>
                        <pre><strong>Detailed Inquiry:</strong> ${message}</pre>
                    </div>
                </body>
            </html>
        `);
        newWindow.document.close();
    });
});

function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
}
