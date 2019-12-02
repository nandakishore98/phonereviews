if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI:'mongodb+srv://chetan:cns123@chetan-n9o3i.mongodb.net/test?retryWrites=true&w=majority'}
  } else {
    module.exports = {mongoURI:'mongodb://localhost/phonereview'}
}