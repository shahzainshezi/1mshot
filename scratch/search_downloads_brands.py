import os

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"

# List files matching Mask group or Rectangle or Wilson
for f in os.listdir(downloads):
    lf = f.lower()
    if any(k in lf for k in ["wilson", "rectangle", "mask group"]):
        safe_name = f.encode('ascii', errors='ignore').decode('ascii')
        print(f"{safe_name}: {os.path.getsize(os.path.join(downloads, f))} bytes")
