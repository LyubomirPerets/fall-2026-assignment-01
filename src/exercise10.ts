export type UserAccount = {
  id: string;
  createdAt: Date;
  email: string;
  passwordHash: string;
  profile: {
    bio: string;
    avatarUrl: string;
  };
};

// indentation mess i apologize extremely

export class UserRegistry {
  private records: Map<string, UserAccount> = new Map();
  private nextId = 1;

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const newUser: UserAccount = {
    ...data,
    id: `user-${this.nextId++}`,
    createdAt: new Date(),
  };
  this.records.set(newUser.id, newUser);
    return newUser;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const record = this.records.get(id);
    if (!record) {
      return undefined;
    }

    return Object.freeze({
      id: record.id,
      email: record.email,
      profile: {...record.profile},
    });
  }
}
