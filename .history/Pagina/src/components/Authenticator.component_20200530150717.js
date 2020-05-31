




 const jwt= localStorage.getItem("token");
 if (!jwt) {
   this.props.history.push('/login');
 }

 axios.get("/getUser/",{headers:{Authorization:'Bearer ${jwt}'}})
 .then(res =>res.setState({
   user:res.data
 })).catch(err =>{
   localStorage.removeItem("token");
   this.props.history.push('/login');             // Funciona, corregir en un futuro ya que en caso de que el servidor sea el que falle, va seguir enviandolo al login aunque el user y pass esten bien
 } );