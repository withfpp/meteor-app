Router.configure({
	layoutTemplate:'layout',
	loadingTemplate:'loading',
	notFoundTemplate:'notFound'
})

Router.route("/",{
	name: "homeIndex",
	data: function(){
		return {
			message: 'Welcome to the Test App'
		}
	}
})
Router.route("/about",{
	name: "homeAbout",
	data: function(){
		return {
			message: 'Welcome to the Test App'
		}
	}
})
Router.route("/contact",{
	name: "homeContact",
	data: function(){
		return {
			message: 'Welcome to the Test App'
		}
	}
})
Router.route("/products/:sku", {
	name: "productsShow",
	data: function(){
		var sku = this.params.sku
		return Products.findOne({sku: this.params.sku});
	}
})