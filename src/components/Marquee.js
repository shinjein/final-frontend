import Marquee from 'react-double-marquee';

export default function FooComponent() {
  return (
    <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
        fontSize: "3rem"
      }}
      className="marquee-txt"
    >
      <Marquee>
+&nbsp;&nbsp;&nbsp;+ + p a g e r + +&nbsp;&nbsp;&nbsp;+ 
      </Marquee>
    </div>
  );
}