module.exports = {
  initializeApp: jest.fn(() => ({
    auth: jest.fn(() => ({
      signInWithEmailAndPassword: jest.fn(),
      createUserWithEmailAndPassword: jest.fn(),
    })),
  })),
  getAuth: jest.fn(),
};
