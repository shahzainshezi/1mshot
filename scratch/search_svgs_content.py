import os

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"

for f in os.listdir(downloads):
    if f.lower().endswith('.svg'):
        path = os.path.join(downloads, f)
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
            if "wilson" in content.lower():
                print(f"FOUND in {f}!")
        except Exception as e:
            pass
