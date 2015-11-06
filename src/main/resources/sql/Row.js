// Define the Row constructor
/*
 * NOTE: the following have not been implemented
 * 
<K,V> java.util.Map<K,V>	getJavaMap(int i)
Returns the value at position i of array type as a Map.
<T> java.util.List<T>	getList(int i)
Returns the value at position i of array type as List.
<K,V> scala.collection.Map<K,V>	getMap(int i)
Returns the value at position i of map type as a Scala Map.
<T> scala.collection.Seq<T>	getSeq(int i)
Returns the value at position i of array type as a Scala Seq.
<T> scala.collection.immutable.Map<java.lang.String,T>	getValuesMap(scala.collection.Seq<java.lang.String> fieldNames)
Returns a Map(name -> value) for the requested fieldNames
scala.collection.Seq<java.lang.Object>	toSeq()
Return a Scala Seq representing the row.
*/
/**
 * Represents one row of output from a relational operator. Allows both generic access by ordinal, which will incur boxing overhead for primitives, as well as native primitive access.
 * It is invalid to use the native primitive interface to retrieve a value that is null, instead a user must check isNullAt before attempting to retrieve a value that might be null.
 * To create a new Row, use RowFactory.create()
 *  @constructor
 *  
 */
function Row(jvmObj) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
  JavaWrapper.call(this, jvmObj);

  // Initialize our Row-specific properties
  this.logger = Logger.getLogger("Row_js");
  this.logger.debug("Row constructor");
};

//Create a Row.prototype object that inherits from JavaWrapper.prototype.

Row.prototype = Object.create(JavaWrapper.prototype); 

//Set the "constructor" property to refer to Row
Row.prototype.constructor = Row;
/**
 * Returns true if there are any NULL values in this row.
 * @returns {boolean}
 */
Row.prototype.anyNull = function() {
	/*
	boolean	anyNull()
	Returns true if there are any NULL values in this row.
	*/
	return this.getJavaObject().anyNull();
};
/**
 * Returns the value at position index.
 * @param index
 * @returns {object}
 */
Row.prototype.apply = function(index) {
	/*
	java.lang.Object	apply(int i)
	Returns the value at position i.
	*/
	return this.getJavaObject().apply();
};
/**
 * Make a copy of the current Row object
 * @returns {Row}
 */
Row.prototype.copy = function() {
	/*
	Row	copy()
	Make a copy of the current Row object
	*/
	return new Row(this.getJavaObject().copy());
};
/**
 * compares object o to this Row object
 * @param {object}o
 * @returns {boolean}
 */
Row.prototype.equals = function(o) {
	/*
	boolean	equals(java.lang.Object o) 
	*/
	return this.getJavaObject().equals(Utils.unwrapObject(o));
};
/**
 * Returns the index of a given field name.
 * @param {string} name
 * @returns {integer}
 */
Row.prototype.fieldIndex = function(name) {
	/*
	int	fieldIndex(java.lang.String name)
	Returns the index of a given field name. 
	*/
	return this.getJavaObject().fieldIndex(name);
};
/**
 * Returns the value at position index.
 * @param {integer} index
 * @returns {object}
 */
Row.prototype.get = function(index) {
	/*
	java.lang.Object	get(int i)
	Returns the value at position i.
	*/
	return this.getJavaObject().get(index);
};
/**
 * Returns the value at position index as a primitive boolean.
 * @param {integer} index
 * @returns {boolean}
 */
Row.prototype.getBoolean = function(index) {
	/*
	boolean	getBoolean(int i)
	Returns the value at position i as a primitive boolean.
	*/
	return this.getJavaObject().getBoolean(index);
};
/**
 * Returns the value at position idex as a primitive byte.
 * @param {integer} index
 * @returns {byte}
 */
Row.prototype.getByte = function(index) {
	/*
	byte	getByte(int i)
	Returns the value at position i as a primitive byte.
	*/
	return this.getJavaObject().getByte(index);
};
/**
 * Returns the value at position index of type as Date.
 * @param {integer} index
 * @returns {Date}
 */
Row.prototype.getDate = function(index) {
	/*
	java.sql.Date	getDate(int i)
	Returns the value at position i of date type as java.sql.Date.
	*/
	var javaSqlDate = this.getJavaObject().getDate(index);
	var date = new Date(javaSqlDate.getTime());
	return date;
};
/**
 * Returns the value at position index of type as decimal.
 * @param {integer} index
 * @returns {decimal}
 */
Row.prototype.getDecimal = function(index) {
	/*
	java.math.BigDecimal	getDecimal(int i)
	Returns the value at position i of decimal type as java.math.BigDecimal.
	*/
	return this.getJavaObject().getDecimal(index);
};
/**
 * Returns the value at position index of type as double.
 * @param {integer} index
 * @returns {double}
 */
Row.prototype.getDouble = function(index) {
	/*
	double	getDouble(int i)
	Returns the value at position i as a primitive double.
	*/
	return this.getJavaObject().getDouble(index);
};
/**
 * Returns the value at position index of type as float.
 * @param {integer} index
 * @returns {float}
 */
Row.prototype.getFloat = function(index) {
	/*
	float	getFloat(int i)
	Returns the value at position i as a primitive float..
	*/
	return this.getJavaObject().getFloat(index);
};
/**
 * Returns the value at position index of type as integer.
 * @param {integer} index
 * @returns {integer}
 */
Row.prototype.getInt = function(index) {
	/*
	it	getInt(int i)
	Returns the value at position i as a primitive int..
	*/
	return this.getJavaObject().getInt(index);
};
/**
 * Returns the value at position index of type as long.
 * @param {integer} index
 * @returns {long}
 */
Row.prototype.getLong = function(index) {
	/*
	long	getLong(int i)
	Returns the value at position i as a primitive long.
	*/
	return this.getJavaObject().getLong(index);
};
/**
 * Returns the value at position index of type as short.
 * @param {integer} index
 * @returns {short}
 */
Row.prototype.getShort = function(index) {
	/*
	short	getShort(int i)
	Returns the value at position i as a primitive short.
	*/
	return this.getJavaObject().getShort(index);
};
/**
 * Returns the value at position index of type as String.
 * @param {integer} index
 * @returns {String}
 */
Row.prototype.getString = function(index) {
	/*
	java.lang.String	getString(int i)
	Returns the value at position i as a String object.
	*/
	return this.getJavaObject().getString(index);
};
/**
 * Returns the value at position index of  struct type as an Row object.
 * @param {integer} index
 * @returns {String}
 */
Row.prototype.getStruct = function(index) {
	/*
	Row	getStruct(int i)
	Returns the value at position i of struct type as an Row object.
	*/
	return new Row(this.getJavaObject().getStruct(index)); // wrapper the java row object
};
/**
 * Returns the value at position index of date type as Date.
 * @param {integer} index
 * @returns {Date}
 */
Row.prototype.getTimestamp = function(index) {
	/*
	java.sql.Timestamp	getTimestamp(int i)
	Returns the value at position i of date type as java.sql.Timestamp.
	*/
	return this.getDate(index); 
};
/**
 * Returns hash code
 * @returns {int}
 */
Row.prototype.hashCode = function() {
	/*
	int	hashCode() 
	*/
	return this.getJavaObject().hashCode()
};
/**
 * Checks whether the value at position index is null.
 * @param {integer} index
 * @returns {boolean}
 */
Row.prototype.isNullAt = function(index) {
	/*
	boolean	isNullAt(int i)
	Checks whether the value at position i is null.
	*/
	return this.getJavaObject().isNullAt(index);
};
/**
 * Number of elements in the Row.
 * @returns {integer}
 */
Row.prototype.length = function() {
	/*
	int	length()
	Number of elements in the Row.
	*/
	return this.getJavaObject().length();
};
/**
 * Displays all elements of this traversable or iterator in a string using start, end, and separator strings.
 * @param {string} Optional separator
 * @param {string} Optional start
 * @param {string} Required end, if start specified 
 * @returns {string}
 */
Row.prototype.mkString = function(separator, start, end) {
	
	if (start && end) {
		/*
		java.lang.String	mkString(java.lang.String start, java.lang.String sep, java.lang.String end)
		Displays all elements of this traversable or iterator in a string using start, end, and separator strings.
		*/
		return this.getJavaObject().mkString(start, separator, end);
	} else {
		/*
		java.lang.String	mkString()
		Displays all elements of this sequence in a string (without a separator).
		java.lang.String	mkString(java.lang.String sep)
		Displays all elements of this sequence in a string using a separator string.
		*/
		return this.getJavaObject().mkString(separator);
	}
	
};
/**
 * Schema for the row.
 * @returns {StructType}
 */
Row.prototype.schema = function() {

	/*
	StructType	schema()
	Schema for the row.
	*/
	return this.getJavaObject().schema();
	
};
/**
 * Number of elements in the Row.
 * @returns {integer}
 */
Row.prototype.size = function() {

	/*
	int	size()
	Number of elements in the Row.
	*/
	return this.getJavaObject().size();
	
};

/* 
 * java.lang.String	toString() implemented by parent class JavaWrapper
 */

Row.prototype.toJSON = function() {
	//var s = "[" + this.getJavaObject().mkString(",") + "]";
	//print("row toJson " + s);
	return this.toString();
	//return s
};