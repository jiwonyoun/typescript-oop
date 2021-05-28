{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };

  type ResultState = NetworkErrorState | SuccessState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: "success",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private usersService: UserService) {}

    run() {
      try {
        this.usersService.login();
      } catch (error) {
        console.log(error);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  service.login();
}
