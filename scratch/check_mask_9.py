import os

downloads_path = r"C:\Users\HAJI LAPTOP g55\Downloads\Mask group (9).svg"
images_path = r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\Mask group (9).svg"
workspace_path = r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\mask_group_9.svg"

print(f"Downloads exists: {os.path.exists(downloads_path)}")
print(f"Images exists: {os.path.exists(images_path)}")
print(f"Workspace lowercase exists: {os.path.exists(workspace_path)}")
