import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReactiveBase, DataSearch, ReactiveList } from '@appbaseio/reactivesearch-native';

export default class App extends React.Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
      >
        <View style={styles.container}>
          <DataSearch
            dataField={['original_title', 'original_title.search']}
            componentId="bookSensor"
            autosuggest={false}
            placeholder="Search books..."
            style={{
              width: '90%',
            }}
          />

          <ReactiveList
            componentId="searchResult"
            dataField="original_title"
            size={10}
            onData={result => <Text key={result._id}>{result.title}</Text>}
            pagination
            showResultStats={false}
            react={{
              and: ['bookSensor'],
            }}
          />
        </View>
      </ReactiveBase>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});
