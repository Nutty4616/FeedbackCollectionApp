import _ from "lodash";

const RE =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmails = (emails) => {
  // Get the list of emails from the user
  // split the string by comma(,) that will return an array[''] of emails
  const emailArray = emails.split(",");

  // then follow up throughout that array and do some one by one validation
  const emailTrim = emailArray.map((email) => email.trim());

  // filter each email to find an invalid email and validate it
  let invalidEmails = emailTrim.filter(
    (email) => RE.test(email) === false && email.length
  );

  invalidEmails = _.compact(invalidEmails);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
  return null;
};

export default validateEmails;
