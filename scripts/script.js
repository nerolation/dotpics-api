document.addEventListener('DOMContentLoaded', function() {
    const endpointHeaders = document.querySelectorAll('#code-sample-header');
    
    endpointHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the next two elements (the <p> and the <pre><code>)
            //var apiSchema = this.nextElementSibling;
            //var contentDescription = apiSchema.nextElementSibling;
            var contentCode = this.nextElementSibling;

            //contentDescription.style.display = (contentDescription.style.display === "block" ? "none" : "block");
            contentCode.style.display = (contentCode.style.display === "block" ? "none" : "block");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tableSchemaHeaders = document.querySelectorAll('#table-schema-header');
    
    tableSchemaHeaders.forEach(header => {
        header.addEventListener('click', function() {
            var contentTableSchema = this.nextElementSibling;

            //contentDescription.style.display = (contentDescription.style.display === "block" ? "none" : "block");
            contentTableSchema.style.display = (contentTableSchema.style.display === "block" ? "none" : "block");
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Highlight.js
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});
