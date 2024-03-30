import qrcode
import re

def generate_qr_code(data, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)

data = input("Entre la données pour le QR code: ")
pattern = r'(?:https?://)?(?:www\.)?(\w+)\.(?:fr|com)'
match = re.search(pattern, data)
filename = f"{match.group(1)}_qr_code.jpg"
generate_qr_code(data, filename)