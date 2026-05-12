import { Injectable } from '@angular/core';

export interface User {
  fullName: string;
  studentId: string;
  email: string;
  mobile: string;
  course: string;
  password: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USERS_KEY = 'legapay_users';
  private readonly SESSION_KEY = 'legapay_current_user';

  // ── Get all registered users from localStorage ──
  getUsers(): User[] {
    const data = localStorage.getItem(this.USERS_KEY);
    return data ? JSON.parse(data) : [];
  }

  // ── Save all users to localStorage ──
  private saveUsers(users: User[]): void {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // ── Register a new user ──
  register(user: User): { success: boolean; message: string } {
    const users = this.getUsers();

    // Check if email already exists
    const emailExists = users.find(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (emailExists) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    // Check if student ID already exists
    const idExists = users.find(u => u.studentId === user.studentId);
    if (idExists) {
      return { success: false, message: 'An account with this Student ID already exists.' };
    }

    // Add new user
    users.push(user);
    this.saveUsers(users);
    return { success: true, message: 'Account created successfully!' };
  }

  // ── Login ──
  login(email: string, password: string): { success: boolean; message: string; user?: User } {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return { success: false, message: 'Invalid email or password. Please try again.' };
    }

    // Save session
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    return { success: true, message: 'Login successful!', user };
  }

  // ── Get current logged-in user ──
  // ── Get current logged-in user — always reads fresh from localStorage ──
getCurrentUser(): User | null {
  const data = localStorage.getItem(this.SESSION_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data) as User;
  } catch {
    return null;
  }
}

  // ── Update current user session (after profile edits) ──
  updateSession(user: User): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));

    // Also update in the users list
    const users = this.getUsers();
    const index = users.findIndex(u => u.email === user.email);
    if (index !== -1) {
      users[index] = user;
      this.saveUsers(users);
    }
  }

  // ── Logout ──
  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  // ── Check if someone is logged in ──
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.SESSION_KEY);
  }
}