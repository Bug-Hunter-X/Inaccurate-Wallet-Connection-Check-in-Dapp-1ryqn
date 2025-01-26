async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('Wallet is connected. Account:', account);
      return account; //Return the connected account
    } else {
      console.log('Connect to MetaMask using the connect button.');
      return null;
    }
  } catch (error) {
    console.error('Error checking for connection:', error);
    return null;
  }
}

