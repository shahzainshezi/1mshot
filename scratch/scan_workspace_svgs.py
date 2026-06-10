import os

workspace = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot"

for root, dirs, files in os.walk(workspace):
    for f in files:
        if f.lower().endswith('.svg'):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                    content = file.read()
                if "wilson" in content.lower():
                    print(f"FOUND in workspace: {path}")
            except Exception as e:
                pass
