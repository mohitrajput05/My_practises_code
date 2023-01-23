import pool from '../util/dbconfig.js';

class Product{
    constructor(id,name,price,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    saveProduct(){
      return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(!err){
              let sql= "insert into product(name,price,description) values(?,?,?)";
              con.query(sql,[this.name,this.price*1,this.description],(err,results)=>{
                con.release();
                err ? reject(err) : resolve(results);
              });
            }  
            else
              reject(err);
         });
      });
    }
    static productList(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
              if(!err){
                 let sql = "select * from product";
                 con.query(sql,(err,results)=>{
                    con.release();
                    err ? reject(err) : resolve(results);
                 });
              }
              else
                reject(err);
            });
        });
    }
    static delete(id){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
               if(!err){
                  let sql = "delete from product where id = ?";
                  con.query(sql,[id*1],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                  });
               }
               else
                reject(err);
           });  
        });
    }
    update(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "update product set name=?,price=?,description=? where id=?";
                  con.query(sql,[this.name,this.price*1,this.description,this.id*1],(err,result)=>{
                      con.release();
                      err ? reject(err) : resolve(result);
                  });
                } 
                else
                 reject(err);
            });
        });
    }
}
export default Product;