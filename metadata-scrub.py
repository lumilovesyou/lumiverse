import subprocess
import os

for root, dirs, files in os.walk("/Users/felisaraneae/Documents/GitHub/lumiverse/assets/images/personal/"):
    for file in files:
        path = os.path.join(root, file)
        
        subprocess.run(["exiftool", "-all=", "-overwrite_original", path])