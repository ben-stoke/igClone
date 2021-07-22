pragma solidity ^0.5.0;

contract Decentragram {
    string public name = "Decentragram";
    uint256 public imageCount = 0;

    // this works like a database on the blockchain; by storing data.
    mapping(uint256 => Image) public images;

    // used to define kinda like columns in the images table.
    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;
    }

    event imageCreated(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author
    );

    
  event ImageTipped(
    uint id,
    string hash,
    string description,
    uint tipAmount,
    address payable author
  );

    function upload_image(string memory _imgHash, string memory _description)
        public
    {
        // Make sure the image hash exists
        require(bytes(_imgHash).length > 0);
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists. 0x0 means empty or null address
        require(msg.sender != address(0x0));

        // incrementing image counter
        imageCount++;

        // save image details to DB using the mapping keyword
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            msg.sender
        );

        // send an event to the front end to notify it
        emit imageCreated(imageCount, _imgHash, _description, 0, msg.sender);
    }

    function tipImageOwner(uint256 _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= imageCount);
        
        // Fetch the image
        Image memory _image = images[_id];
        
        // Fetch the author
        address payable _author = _image.author;
        
        // Pay the author by sending them Ether
        address(_author).transfer(msg.value);
        
        // Increment the tip amount
        _image.tipAmount = _image.tipAmount + msg.value;
        
        // Update the image
        images[_id] = _image;
        
        // Trigger an event
        emit ImageTipped(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _author
        );
    }
}
