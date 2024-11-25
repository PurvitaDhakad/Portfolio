  // JavaScript to handle the button click
  document.getElementById('resumeButton').addEventListener('click', function () {
    // Provide the correct URL of your PDF file
    const pdfUrl = 'your-resume.pdf'; // Replace with your PDF file name
    window.open(pdfUrl, '_blank');
    // Get the iframe element
    const iframe = document.getElementById('pdfViewer');

    // Set the src of the iframe to the PDF URL
    iframe.src = pdfUrl;

  
  });
