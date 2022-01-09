pragma solidity >=0.4.21 <0.6.0;

contract Covid{
    string public name;
    uint256 public idHash = 0;
    enum roles{pasien,dokter,validator,admin}
    address public admAddress;
    

    struct User{
        string username;
        roles role;
    }
    
    struct SHash{
        string hash;
        uint256 time;
        int exp;
    }

     constructor() public{
        name="Aplikasi Validasi Surat Keterangan Bebas Covid-19";
        admAddress=msg.sender;
        users[admAddress].username='Admin';
        users[admAddress].role = roles.admin;
    }
    
    mapping(uint256=>SHash) public sHash;
    mapping(address => User) public users;
    //SHash[] public sHash;
    
    function addUser(address uAddress, string memory uName, int uRole) public{
        require(msg.sender==admAddress);
        require(
            uRole<=2,
            "Role Not Available"
        );
        users[uAddress].username=uName;
        if(uRole==0){
            users[uAddress].role= roles.dokter;
        }else if(uRole==1){
            users[uAddress].role= roles.validator;
        }
    }
    
    function storeHash(string memory hash, int exp) public {
        if(idHash==0){
           sHash[idHash]=SHash(hash,block.timestamp,exp); 
           idHash++;
        }else{
            uint j=0;
            uint i=idHash;
            bool exist=false;
            while(i!=0){    
                if(keccak256(abi.encodePacked((sHash[j].hash))) == keccak256(abi.encodePacked((hash)))){
                    exist=true;
                }
                j++;
                i--;
            }
            j--;
            require(exist==false,
                "This Hash Already Exist!"
            );
            uint Tnow=block.timestamp-sHash[j].time;
            if(Tnow>=604800){
                sHash[j]=SHash(hash,block.timestamp,exp);
            }else{
                sHash[idHash]=SHash(hash,block.timestamp,exp);
                idHash++;
            }
        }

        

    }
    
    
}

 
 