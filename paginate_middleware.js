function paginate(model){
    return(req,res,next)=>{
        const page = req.query.page || 1
        const limit = 10
        const startIndex = (page-1)*limit
        const endIndex = page*limit
        
        const result = {}

        if(endIndex<model.length){
            result.next={
                page: page+1,
                limit:limit,
            }
        }

        if(startIndex>0){
            result.previous={
                page: page-1,
                limit:limit,
            }
        }

        result.results = model.slice(startIndex,endIndex)
        res.paginatedResult = result
        next()
    }
}

module.exports = paginate