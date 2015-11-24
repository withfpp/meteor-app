Products = [
	{
		"sku":"abcde",
		"name":"name1",
		"image":"image1.jpg",
		"summary":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo natus, unde distinctio",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim consequuntur earum, non, natus architecto quae voluptate dicta fugiat modi velit similique quasi officiis consectetur quas numquam provident, nam explicabo.",
		"price": 8005,
		"vendor": {
			"id": 1,
			"slug":"super-sonic",
			"name":"Super Sonic"
		}
	},
	{
		"sku":"hypersonic",
		"name":"name2",
		"image":"image2.jpg",
		"summary":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo natus, unde distinctio",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim consequuntur earum, non, natus architecto quae voluptate dicta fugiat modi velit similique quasi officiis consectetur quas numquam provident, nam explicabo.",
		"price": 6330,
		"vendor": {
			"id": 2,
			"slug":"hyper-sonic",
			"name":"Hyper Sonic"
		}
	},
	{
		"sku":"googogoo",
		"name":"name3",
		"image":"image3.jpg",
		"summary":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo natus, unde distinctio",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim consequuntur earum, non, natus architecto quae voluptate dicta fugiat modi velit similique quasi officiis consectetur quas numquam provident, nam explicabo.",
		"price": 2000,
		"vendor": {
			"id": 3,
			"slug":"twenty-millions",
			"name":"Twenty Millions"
		}
	},
]

Products.featured = function(){
  var featuredSkus = ["abcde","googogoo"];
  return _.filter(Products, function(v){
  	return featuredSkus.indexOf(v.sku) > -1;
  });
};

Products.findOne = function(args){
	return _.find(Products, function(product){
		return product.sku === args.sku;
	})
}