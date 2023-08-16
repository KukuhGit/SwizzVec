# SwizzVec

 If you want something like that then I made the library

Please try

https://github.com/KukuhGit/SwizzVec

How to use 

    var v1 = vec(1, 2, 3);
    var v2 = vec(v1.zyx, 7);
    var v3 = vec(v1.zz, v2.xd);
    var v4 = vec(2, 7, v3.zy);
    v4.x = 6;
    var v5 = vec(v4.xzyd);

Not yet supported 

    var V2 = V1.xy;
    V2.xy = V1.xx;

And mathematical operations in it 

    var V8 = V4.zd + V2.yx;

But if you agree, I will update the code or you can recommend an update and help later
