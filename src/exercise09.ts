export type AdminUser = {
  adminId: string;
  perms: string[];
};

export type GuestUser = {
  guestToken: string;
  expiresAt: Date;
};

export function isAdmin(user: AdminUser | GuestUser): user is AdminUser {
  return 'adminId' in user;
}

export function extractAdmins(
  users: Array<AdminUser | GuestUser>,
): AdminUser[] {
  return users.filter(isAdmin);
}
