from pypdf import pdfReader

reader = PdfReader("test.pdf")
number_of_page = len(reader.pages)
pages = reader.pages[0]
text = pages.extract_text()

def rotate_pdf(output_file, input_file, rotation):
    reader = PdfReader(input_file)
    writer = PdfWriter()

    for page in reader.pages:
        page.rotate(rotation)
        writer.add_page(page)

    with open(output_file, "wb") as f:
        writer.write(f)
rotate_pdf("rotated_test.pdf", "rotated.pdf", 90)