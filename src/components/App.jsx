import user from './user.json';

export const Profile = ({
  username = user.username,
  tag = user.tag,
  location = user.location,
  avatar = user.avatar,
  stats = user.stats,
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            class="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span class="label">{stat.label}</span>
            <span class="percentage">{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Id</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
