from json import loads


def read(name):
    information = "{}"
    try:
        with open(f"./assets/information/{name}.json") as f:
            information = f.read()
    except FileNotFoundError as e:
        print(f"Error reading {name}: {e}")
    return loads(information)
