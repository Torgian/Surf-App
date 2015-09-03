
function surfTabling (result) {
    var surfTable = function feed_table(tableobj){
    // data is a JSON object with
    //{'id': 'table id',
    // 'header':[{'a': 'Asset Tpe', 'b' : 'Description', 'c' : 'Assets Value', 'd':'Action'}], 
    // 'data': [{'a': 'Non Real Estate',  'b' :'Credit card',  'c' :'$5000' , 'd': 'Edit/Delete' },...   ]}
    
    $('#' + tableobj.id).html( '' );

    $.each([tableobj.header, tableobj.data], function(_index, _obj){
    $.each(_obj, function(index, row){
        var line = "";
        $.each(row, function(key, value){
            if(0 === _index){
                line += '<th>' + value + '</th>';    
            }else{
                line += '<td>' + value + '</td>';
            }
        });
        line = '<tr>' + line + '</tr>';
        $('#' + tableobj.id).append(line);
    });

        
    });    
}

// testing
var tableData = $(function(){
    var t = {
    'id': 'here_table',
    'header':[{'a': 'Surf', 'b' : 'Primary Swell', 'c' : 'Wind', 'd':'Weather'}], 
    'data': [{'a': 'Non Real Estate',  'b' :'Credit card',  'c' :'$5000' , 'd': 'Edit/Delete' },
         {'a': 'Real Estate',  'b' :'Property',  'c' :'$500000' , 'd': 'Edit/Delete' }
        ]};

    surfTable(t);
});

};