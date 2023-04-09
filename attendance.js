function getattendance(){


    fetch('',)
        .then(response => response.json())
        .then(data => data)
      .then (data => {
        document.getElementById("s1-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s1-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s1-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s1-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s1-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s2-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s2-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s2-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s2-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s2-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s3-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s3-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s3-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s3-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s3-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s4-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s4-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s4-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s4-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s4-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s5-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s5-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s5-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s5-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s5-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s6-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s6-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s6-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s6-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s6-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s7-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s7-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s7-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s7-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s7-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s8-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s8-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s8-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s8-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s8-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s9-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s9-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s9-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s9-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s9-friday").innerHTML = JSON.stringify(data.service_version);

        document.getElementById("s10-monday").innerHTML = JSON.stringify(data.copyright);
        document.getElementById("s10-tuesday").innerHTML = JSON.stringify(data.date);
        document.getElementById("s10-wednesday").innerHTML = JSON.stringify(data.explanation);
        document.getElementById("s10-thursday").innerHTML = JSON.stringify(data.media_type);
        document.getElementById("s10-friday").innerHTML = JSON.stringify(data.service_version);
        console.log(data)
      })
      .catch(err => console.error(err));
  
  }