import React from 'react';
import { MainView } from './pages/MainView/MainView';
import { Footer } from './components/navItems/footer'
import { AppContextProvider } from './Context/AppContext';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { onError, ErrorResponse } from "@apollo/client/link/error";

const errorLink = onError((error) => {
	if (error)
		console.error(error)
});

const link = from([
	errorLink,
	new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
	cache: new InMemoryCache(), link: link
})

function App() {
	return (
		<ApolloProvider client={client}>
			<AppContextProvider>
				<MainView />
				<Footer />
			</AppContextProvider>
		</ApolloProvider>
	);
}

export default App;
