import { createBrowserHistory, History as InterfaceHistory } from 'history';

class History {
  private static instance: History;

  private history: InterfaceHistory;

  private constructor() {
    this.history = createBrowserHistory();
  }

  public static getInstance(): History {
    if (!History.instance) {
      History.instance = new History();
    }

    return History.instance;
  }

  public getHistory(): InterfaceHistory {
    return this.history;
  }

  public push(url: string): void {
    this.history.push(url);
  }
}

export default History.getInstance();
