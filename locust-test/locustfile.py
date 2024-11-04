from locust import HttpUser, between, task

class APIUser(HttpUser):
    wait_time = between(1, 3)  # Waktu tunggu antara permintaan

    @task(1)
    def get_item(self):
        self.client.get("/items/1")  # Ganti dengan endpoint GET yang sesuai

    @task(2)
    def create_item(self):
        self.client.post("/items", json={"name": "Item Baru", "price": 100})  # Ganti dengan data sesuai

    @task(1)
    def update_item(self):
        self.client.put("/items/1", json={"name": "Item Diperbarui", "price": 150})  # Ganti dengan data sesuai

    @task(1)
    def delete_item(self):
        self.client.delete("/items/1")  # Ganti dengan endpoint DELETE yang sesuai

# Untuk menjalankan Locust, gunakan perintah berikut di terminal:
# locust -f locustfile.py --host http://localhost:3000
