import Quotes from "../containers/Quotes";

export default (state = [], action) => {

  let index;
  let quote;

  console.log(action);

  switch(action.type) {    
    case "ADD_QUOTE":
      console.log('add quote');
      return state.concat(action.quote);
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    
    case "UPVOTE_QUOTE":
      console.log('upvote quote reducer');
      index = state.findIndex(quote => quote.id == action.quoteId)
      quote = state[index];

      return [
        ...state.slice(0,index),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(index+1)
      ];
      
    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id == action.quoteId)
      quote = state[index];
        if (quote.votes > 0) {
          return [
            ...state.slice(0,index),
            Object.assign({}, quote, {votes: quote.votes -= 1}),
            ...state.slice(index+1)
          ];
        }
        return state;

    default:
      return state;
  }
    
}
