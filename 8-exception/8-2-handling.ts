class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}
