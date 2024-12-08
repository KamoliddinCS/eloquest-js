class Product:
    def __init__(self, brand: str, name: str, year: int, feature: str):
        self.brand = brand
        self.name = name
        self.year = year
        self.feature = feature

    def model_info(self):
        return f"This is {self.name} made by {self.brand} in {self.year} and has a unique feature - {self.feature}."